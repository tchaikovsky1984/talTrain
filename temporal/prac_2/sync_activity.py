import requests 
from temporalio import activity

class GetJSONsync:

    @activity.defn
    def get_json_sync(self):
        answer = self.call_json_server()
        return answer

    def call_json_server(self) -> str:
        url = "https://jsonplaceholder.typicode.com/todos/1"
        res = requests.get(url=url)
        return str(res)
