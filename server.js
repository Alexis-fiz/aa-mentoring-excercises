const http = require('http')
const fs = require('fs/promises')

const server = http.createServer(async (req, res) => {
    if (req.method === 'OPTIONS') {
        res.writeHead(200, {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Max-Age": "86400"
        })
        return res.end()
    }
    if (!req.url || !req.headers.host) {
        res.writeHead(400)
        return res.end('Bad Request')
    }
    const page = new URL(req.url, `http://${req.headers.host}`).pathname
    const params = new URLSearchParams(req.url.split('?')[1])

    if (page === '/form.html') {
        const file = await fs.readFile('form.html')
        res.writeHead(200, { "Content-type": "text/html", "access-control-allow-origin": "*" })
        res.write(file)
        res.end()
        return
    }

    if (page === '/main.js') {
        const file = await fs.readFile('main.js')
        res.writeHead(200, { "Content-type": "application/javascript", "access-control-allow-origin": "*" })
        res.write(file)
        res.end()
        return
    }

    if (page === '/favicon.ico') {
        res.writeHead(200)
        res.end()
        return
    }
    if (page === '/login') {
        if (req.method !== 'POST') {
            res.writeHead(405)
            res.end('Method Not Allowed')
            return
        }

        let body = ''
        req.on('data', chunk => {
            body += chunk.toString()
        })
        req.on('end', () => {
            const data = JSON.parse(body)
            if (data.username === 'admin' && data.password === '12345678') {
                res.writeHead(200, { "Content-type": "application/json", "access-control-allow-origin": "*", "set-cookie": "token=THISISACOOKIE"})
                res.write(JSON.stringify({ name: "admin", age: 30, location: "Greece" }))
                res.end()
                return
            }
            res.writeHead(401)
            res.end('Unauthorized')
            return
        })
    }

    if (page === '/adminStuff') {
        if (req.method !== 'GET') {
            res.writeHead(405)
            return res.end('Method Not Allowed')
        }
        if (req.headers.cookie !== 'token=THISISACOOKIE') {
            res.writeHead(401)
            return res.end('Unauthorized')
        }
        res.writeHead(200, { "Content-type": "application/json"})
        return res.end(JSON.stringify({ adminStuff: "This is the admin stuff", much: 'wow' }))
    }

    if (page === '/saveAdminStuff') {
        if (req.method !== 'POST') {
            res.writeHead(405)
            return res.end('Method Not Allowed')
        }
        if (req.headers.cookie !== 'token=THISISACOOKIE') {
            res.writeHead(401)
            return res.end('Unauthorized')
        }
        let body = ''
        req.on('data', chunk => {
            body += chunk.toString()
        })
        req.on('end', () => {
            const data = JSON.parse(body)
            console.log('We are now saving the data: ', data)
            res.writeHead(200, { "Content-type": "application/json"})
            return res.end(JSON.stringify({ message: 'Data has been saved', adminStuff: 'This is updated admin stuff' }))
        })
    }
})

server.listen(3000, () => {
    console.log('Server is running on port 3000')
})