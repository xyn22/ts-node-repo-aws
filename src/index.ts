import express from 'express';

const app = express();
const DEFAULT_PORT = 3000;
const port = parseInt(process.env.PORT || '', 10) || DEFAULT_PORT;

app.get('/', (req, res) => res.send(`🍪 served from ${process.env.HOSTNAME}`));
app.get('/health', (req, res) => res.send('ok'));
app.get('/hostname', (req, res) => res.send(process.env.HOSTNAME));
app.get('/users', (req, res) => res.send(`👩🏼‍🦰👨🏻‍⚕️🕵🏼‍♀️🧓🏻👱🏻‍♂️👦🏻 served from ${process.env.HOSTNAME}`));
app.get('/apps', (req, res) => res.send(`👩🏻‍💻👨🏻‍💻🧑🏼‍💻🧑🏿‍💻👨🏼‍💻👩‍💻 served from ${process.env.HOSTNAME}`));
app.get('/products', (req, res) => res.send(`🍩🍪🥧🥐🥯🥖 served from ${process.env.HOSTNAME}`));
app.get('*', (req, res) => res.send('burned!'));

app.listen(port, () => console.log(`serving cookies from http://localhost:${port}/`));
