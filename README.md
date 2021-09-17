Getting started with SingleStore and Node.js
============================================

Note: This repo has been archived. You can find up to date SingleStore and Node.js guide here: https://github.com/singlestore-labs/singlestore-node-quickstart


Whether you're using an ORM or straight SQL, you can get started with SingleStore (formerly MemSQL) fast. Here's an introductory sample of using SingleStore with Node and JavaScript. This sample includes all the CRUD methods: Create, Read by id, Read all, Update, and Delete.

Usage
-----

1. [Sign up](https://msql.co/2E8aBa2) for a free SingleStore license. This allows you to run up to 4 nodes up to 32 gigs each for free.

2. Spin up a SingleStore cluster. Choose the deployment strategy that makes sense to you:

   a. **Cloud**: Start a [Managed Service trial](https://msql.co/3iQ0SE8) and run `init.sql`.
   
   b. **VMs**: [Install SingleStore](https://msql.co/3ay2PCb) on a supported Linux distribution then run `init.sql`.
   
   c. **Containers**: Grab your license key from [SingleStore portal](https://msql.co/3fZoxjO) and set it into `docker-compose.yaml`. Then run `docker-compose up` to start the cluster and automatically run `init.sql`.

3. Adjust the connection details in `index.js`, `npm install`, and `npm start`.


License
-------

MIT
