import express from 'express';

const app = express();
const DEFAULT_PORT = 3000;
const port = parseInt(process.env.PORT || '', 10) || DEFAULT_PORT;

app.use('/health', (req, res) => res.send('ok'));
app.use('/hostname', (req, res) => res.send(process.env.HOSTNAME));
app.use('/users', (req, res) => res.send(`👩🏼‍🦰👨🏻‍⚕️🕵🏼‍♀️🧓🏻👱🏻‍♂️👦🏻 served from ${process.env.HOSTNAME}`));
app.use('/apps', (req, res) => res.send(`👩🏻‍💻👨🏻‍💻🧑🏼‍💻💻🖥⌚️🎧 served from ${process.env.HOSTNAME}`));
app.use('/products', (req, res) => res.send(`🍩🍪🥧🥐🥯🥖 served from ${process.env.HOSTNAME}`));
app.use('/', (req, res) => res.send(`🍪 served from ${process.env.HOSTNAME}`));

app.listen(port, () => console.log(`serving cookies from http://localhost:${port}/`));
