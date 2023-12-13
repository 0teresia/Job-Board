const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
require('dotenv').config();

app.use(express.json());
app.use(cors());

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@job-board-project.yexokbu.mongodb.net`;

const client = new MongoClient(uri, {
    serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
    }
});

async function run() {
    try {
    await client.connect();

    const db = client.db('jobBoardProject');
    const jobsCollections = db.collection('jobBoardProject'); 

    app.post('/post-job', async (req, res) => {
            const body = req.body;
            body.createdAt = new Date();
            const result = await jobsCollections.insertOne(body); 
            if (result.insertedId) {
                return res.status(200).send(result);
            } else {
                return res.status(400).send({
                    message: 'Failed to post job.',
                    status: false
                });
            }
    });
    

        app.get('/all-jobs', async(req, res) => {
            const jobs = await jobsCollections.find({}).toArray()
            res.send(jobs);
        })

        app.get('/all-jobs/:id', async (req, res) => {
            const id = req.params.id;
            const job = await jobsCollections.findOne({
                _id: new ObjectId(id)
            })
            res.send(job)
        })

        app.get('/myJobs/:email', async (req, res) => {
            const jobs = await jobsCollections.find({postedBy : req.params.email }).toArray();
            res.send(jobs)
        })

        app.delete('/job/:id', async(req, res) => {
            const id = req.params.id;
            const filter = {_id: new ObjectId(id)}
            const result = await jobsCollections.deleteOne(filter);
            res.send(result)
        }) 

        app.patch('/update-job/:id', async(req, res) => {
            const id = req.params.id;
            const jobData = req.body;
            const filter = {_id: new ObjectId(id)};
            const options = {upsert: true};
            const updateDoc = {
                $set: {
                    ...jobData,
                },
            }
            const result = await jobsCollections.findOneAndUpdate(filter, updateDoc, options);
            res.send(result)
        })

        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // await client.close();
    }
}

run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
