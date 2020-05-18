#server/app.py

# This is used to dump the models into an oject
import pickle
import datetime
import shutil
# from collections import defaultdict

import matplotlib.pyplot as plt 
import numpy
import scipy.cluster
import scipy.io.wavfile
# For the speech detection algorithms
import speech_recognition
# For the fuzzy matching algorithms
from fuzzywuzzy import fuzz
# For using the MFCC feature selection
from python_speech_features import mfcc
# For generating random words
from random_words import RandomWords
from sklearn import preprocessing
# For using the Gausian Mixture Models
from sklearn.mixture import GaussianMixture

from watson_developer_cloud import SpeechToTextV1