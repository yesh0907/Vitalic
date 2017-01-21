from . import api
from channels.sessions import channel_session
import json

@channel_session
def ws_connect(message):
	message.reply_channel.send({ "accept" : True })

@channel_session
def ws_message(message):
	# Compute Data
	signals = api.parse_RGB(message)
	message.reply_channel.send({ "text": signals })

def ws_disconnect(message):
	message.reply_channel.send({ "text": "bye!" })