import json

def handler(event,context):
    print(json.dumps(event,indent=2))
    return "docker-images/inference"
