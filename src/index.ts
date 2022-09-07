import Express from 'express'

const app = Express()

app.get('/', (req: Express.Request, res: Express.Response) => {
	res.json({
		message: 'Olá Nenemmmm',
	})
})

app.listen(3030, () => {
	console.log('running new version')
})
