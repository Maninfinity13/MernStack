const http = require('http')

const PORT = 3000

// create web server
const server = http.createServer((request, response)=>{
    if(request.url == '/'){
        response.writeHead(200,{'content-type' : 'text/html'})
        response.write( '<h1>Home Page</h1><hr>Home.....')
        response.end

    }else if(request.url == '/product'){
        response.writeHead(200,{'content-type' : 'text/html'})
        response.write( '<h1>Product</h1><hr>Product......')
        response.end
    }else if(request.url == '/about'){
        response.writeHead(200,{'content-type' : 'text/html'})
        response.write( '<h1>About</h1><hr>About......')
        response.end
    }else{
        response.writeHead(404,{'content-type' : 'text/html'})
        response.write( '<h1>File not found</h1><hr>^O^')
        response.end
    }
})

//สั่ง Server Start และคอยรับดักรับ request จาก user พร้อมแสดงสถานะการทำงานของ Server
server.listen(PORT,()=>{
    console.log('Server running on port 3000....^_^');
})