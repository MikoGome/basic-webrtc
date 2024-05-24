const peer = new Peer();

peer.on('open', () => {
    const span = document.querySelector('span').textContent = peer._id;
});

peer.on('connection', (conn) => {
    console.log('open');
    const h1 = document.createElement('h1');
    h1.textContent="Connected to " + conn.peer;
    document.body.append(h1);
    
    const chatbox = document.createElement('input');
    const send = document.createElement('button');
    send.textContent = "Send";

    send.addEventListener('click', () => {
        conn.send(chatbox.value);
        chatbox.value = '';
    });

    document.body.append(chatbox);
    document.body.append(send);

    conn.on('data', data => {
        console.log('test')
        const p = document.createElement('p');
        p.textContent = data;
        document.body.append(p);
    });
});

const btn = document.querySelector('button');

function initializeConn() {
    conn.on('open', () => {
        console.log('open');
        const h1 = document.createElement('h1');
        h1.textContent="Connected to " + conn.peer;
        document.body.append(h1);
    
        const chatbox = document.createElement('input');
        const send = document.createElement('button');
        send.textContent = "Send";

        send.addEventListener('click', () => {
            conn.send(chatbox.value);
            chatbox.value = '';
        });
    
        document.body.append(chatbox);
        document.body.append(send);
    });
    
    conn.on('data', data => {
        console.log('test')
        const p = document.createElement('p');
        p.textContent = data;
        document.body.append(p);
    });
}

btn.addEventListener('click', () => {
    const input = document.querySelector('input');
    conn = peer.connect(input.value);
    initializeConn(conn);
});