from django.apps import AppConfig
from .NeuralNetwork import NeuralNetwork
import os
from django.conf import settings


class IrisPredictorConfig(AppConfig):
    name = 'iris_predictor'

    path = os.path.join(settings.MODELS, 'network.pkl')

    network = NeuralNetwork.load_network(path)
