# IMC indexer

This is a simple indexer for almost any kind of file. It is based
on [Meilisearch](https://docs.meilisearch.com/learn/getting_started/quick_start.html#add-documents) and
uses [AstroJS](https://astro.build/) for the frontend.

## Installation

### Prerequisites

- Clone the repository
- Make sure you have docker or podman installed
- Follow
  the [installation instructions](https://docs.meilisearch.com/learn/getting_started/installation.html#local-installation)
  for Meilisearch
- Make sure you have python3 installed (tested with 3.11)

### Meilisearch

- Launch Meilisearch
- Create a new index using the `extract.py` script (see below)

### Extracting data

- Download your dataset from [find by yourself](https://lemmy.ml/). Be sure that the html file is in the same directory
  as the `extract.py` script and it's named `index.html`
- Run `python3 extract.py`

### Frontend

- Run `docker build -t imc-indexer .` or `podman build -t imc-indexer .`
- Run `docker run -p 3000:3000 imc-indexer` or `podman run -p 3000:3000 imc-indexer`
- Open `http://localhost:3000` in your browser

## Usage

- Search for a term in the search bar
- Click on a result to open it in a new tab

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgements

- [Meilisearch](https://github.com/meilisearch/meilisearch)
- [AstroJS](https://github.com/withastro/astro)
- [Lemmy](https://lemmy.ml/)

## Disclaimer

This is not an official project of any kind. It is just a small project I made for myself and decided to share it with the world.
I am not responsible for any damage caused by this software. Use at your own risk.
It's just a tool to make it easier to search for stuff from a dataset. You can use it for whatever you want, but I won't support you if you use it for illegal purposes.

It is not affiliated with any of the projects mentioned above.
