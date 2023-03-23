from html.parser import HTMLParser


class LinkParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.results = []
        self.current_tag = None
        self.index = 0

    def handle_starttag(self, tag, attrs):
        if tag == 'a':
            self.current_tag = {'name': '', 'url': ''}
            for attr in attrs:
                if attr[0] == 'href':
                    self.current_tag['url'] = attr[1]

    def handle_endtag(self, tag):
        if tag == 'a':
            if self.current_tag['name'] and self.current_tag['url']:
                self.results.append(self.current_tag)
            self.current_tag = None

    def handle_data(self, data):
        if self.current_tag is not None:
            self.current_tag['name'] += data.strip()
            self.current_tag['id'] = self.index
            self.index+=1

def scrape_html_file(file_path):
    with open(file_path) as html_file:
        # Parse the HTML file using the LinkParser
        parser = LinkParser()
        parser.feed(html_file.read())
        return parser.results



results = scrape_html_file('index.html')


# Export the result to a json file
import json
with open('results.json', 'w') as json_file:
    json.dump(results, json_file)

import meilisearch
client = meilisearch.Client('http://localhost:7700')
client.index('chess').add_documents(results)

print(client.get_task(0))