from django.shortcuts import render
from .apps import IrisPredictorConfig
from django.http import JsonResponse
from rest_framework.views import APIView
import random
import numpy as np


# Create your views here.
class CallModel(APIView):
    def get(self, req):
        if req.method == 'GET':
            choice = random.choice(IrisPredictorConfig.network.input_pairs)
            guess = IrisPredictorConfig.network.guess(choice[0])
            guess = guess.tolist()
            actual = choice[1].tolist()
            response = {'guessed': guess,
                        'actual': actual,
                        'inputs': choice[0],
                        'correct': np.array_equal(guess, actual)}
            return JsonResponse(response)