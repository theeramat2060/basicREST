import express, { Request, Response } from 'express'
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.json('Hello World!')
})


app.get('/test', (req: Request, res: Response) => {
    res.json('Hello World! 3')
})

app.get('/test', (req: Request, res: Response) => {
    const id = req.query.id;
    const output = `id: ${id}`;
    res.send(output);
})

app.get('/testObject', (req:Request, res:Response) => {
       let returnObj = {
           name: 'test',
           age: 20,
           address: 'Thai'
       }
       res.json(returnObj);
})
app.get('/testParameter', (req: Request, res: Response) => {
    const id = req.query.id;
    const output = `id: ${id} received`;
    res.send(output);
})


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

