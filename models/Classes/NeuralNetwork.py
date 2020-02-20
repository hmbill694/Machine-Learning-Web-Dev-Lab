import random
import numpy as np
import pandas as pd


class NeuralNetwork:
    def __init__(self, arch, inputs, outputs, learning_rate):
        self.arch = arch
        self.input_pairs = [(x, y) for x, y in zip(inputs, outputs)]
        self.weights = NeuralNetwork.create_weights(arch)
        self.biases = NeuralNetwork.create_biases(arch)
        self.error = None
        self.learning_rate = learning_rate
        self.activations = None
        self.output = None

    def sigmoid(self, x):
        """This is the activation function for the network, it will
            squishify the results of the network to be between 0 and 1.
            It is non-linear  like all other activation functions"""
        return 1 / (1 + np.exp(-x))

    def sigmoid_prime(self, x):
        """This is the "derivative" of the sigmoid function.
            it will be used in the learning phase of the network.
            The real derivative of the sigmoid function is
            f'(x) = sigmoid(x) x (1- sigmoid(x)). However
            when using this in the program my values have already
            gone through the sigmoid function so doing so again would be
            incorrect"""
        return x * (1 - x)

    @staticmethod
    def create_weight_layer(row, col):
        """This will create a matrix with random values of the shape
                R x C where R = the number of neurons in the next layer
                and C = the number of neurons in the current layer"""

        return np.random.randn(row, col)

    @staticmethod
    def create_weights(arch):
        """This function will create the weight matrix for an entire network
                it takes a list where each member in the list represents the the number
                of neurons in that layer. So a input of [5,2,1] represents a network
                with 5 neurons in the first layer, 2 in the second and one in the last layer.
                It will return a list of n-dimensional numpy arrays where each entry in the list
                represents the weights from one layer to the next"""

        # Okay so what's this slicing about? For the architecture of a network we are able to
        # deduce the overall structure of the weight matrix. We will have n-1 weight layers
        # per network where n is the total number of network layers. There are no weights for
        # incoming data so a network shaped like [5,2,1] will have 2 weight layers.
        # The first weight layer will be an array with two rows and 5 columns, the second
        # 1 row with 2 columns
        column_values = arch[:-1]
        row_values = arch[1:]

        return [NeuralNetwork.create_weight_layer(row, col) for row, col in zip(row_values, column_values)]

    @staticmethod
    def create_bias_layer(layer):
        """Creates a np matrix of (n x 1) for a layer of a network
                returns the matrix """
        return np.random.randn(layer, 1)

    @staticmethod
    def create_biases(arch):
        """The number of bias matrices for a network is n - 1, where
                no is the number of layers in the network, including inputs.
                Each neuron in a layer will have it's own bias. So a network
                of size [5,2,1] will have two biases for one layer and 1 for the next.
                The inputs do not get biases."""
        layers_that_need_biases = arch[1:]
        return [NeuralNetwork.create_bias_layer(neurons_in_layer) for neurons_in_layer in layers_that_need_biases]

    def feed_forward(self, input_matrix_as_list, guess=False):
        """This function feeds the inputs into the matrix."""
        # Store inputs as a column matrix (n x 1)
        if isinstance(input_matrix_as_list, (np.ndarray, np.generic)):
            input_matrix_as_list = input_matrix_as_list.tolist()

        output = np.c_[input_matrix_as_list]
        layer_activations = [output]

        for bias, weight in zip(self.biases, self.weights):
            output = self.sigmoid(np.dot(weight, output) + bias)
            layer_activations.append(output)

        if not guess:
            self.output = output
            self.activations = layer_activations
        else:
            return output

    def back_propagate_error(self, actual_values_matrix, guessed_values_matrix):
        """This function will calculate a error matrix for each hidden layer neuron """
        actual_values_matrix = np.c_[actual_values_matrix]
        guessed_values_matrix = np.c_[guessed_values_matrix]

        # seed error with error between output of network and target output
        error = [np.subtract(actual_values_matrix, guessed_values_matrix)]

        # Reverse the weight matrix and then iterate in reverse to
        # the last layer, we omit the first layer as that would calculate
        # the error for inputs which does not make sense
        for index, layer in enumerate(self.weights[:0:-1]):
            error.append(np.dot(layer.transpose(), error[index]))
        self.error = list(reversed(error))

    def create_deltas(self, learning_rate, weight_matrix, bias_matrix, error_matrix, activations):
        """This method will find the changes to each of the weights and biases in the network
            it will then return these two lists of deltas"""

        # lambda function to apply the derivative of sigmoid to the activations array
        vectorized_sigmoid_prime = lambda x: self.sigmoid_prime(x)

        # lists to contain the delta for each layer's weights and biases
        delta_weights = []
        delta_biases = []

        # the gradients found from applying the sigmoid prime to the activations, omitting the first layer
        # which is the inputs, these cannot be altered
        gradients = [vectorized_sigmoid_prime(layer) for layer in activations[1:]]

        # iterate over the errors, gradients, weights, biases, and activations
        # applying the function delta_weight_layer = Gradient * lr * Error Layer * activation.T
        # the delta_biases = gradients for that layer
        for _, error_layer, gradient, activation, bias in zip(weight_matrix, error_matrix, gradients, activations,
                                                              bias_matrix):
            gradient = np.multiply(gradient, learning_rate)
            gradient = np.multiply(gradient, error_layer)
            delta_layer = np.multiply(activation.transpose(), gradient)
            delta_weights.append(delta_layer)
            delta_biases.append(gradient)

        # return lists of gathered errors
        return delta_weights, delta_biases

    def train_SGD(self, iterations):
        """This method will uses stochastic gradient descent to train the network. It will
            select a random entry in the input_pairs, which is tuple of lists where [0]: inputs
            and where [1]: 1 is the known answer. It will then return the adjusted weights and biases
            for the network after executing the training loop for the number of iterations"""

        # training loop for SGD
        for x in range(iterations):
            test_item_pair = random.choice(self.input_pairs)
            known_output = test_item_pair[1]
            self.feed_forward(test_item_pair[0])
            self.back_propagate_error(known_output, self.output)
            delta_weight_matrix, delta_biases_matrix = self.create_deltas(self.learning_rate, self.weights,
                                                                          self.biases, self.error, self.activations)
            # adjust weights and biases by delta for the layer
            self.weights = np.add(self.weights, delta_weight_matrix)
            self.biases = np.add(self.biases, delta_biases_matrix)

    def guess(self, input_list):
        return self.feed_forward(input_list, True)
