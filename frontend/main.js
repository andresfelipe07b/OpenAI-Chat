async function sendMessage() {
    const input = document.getElementById("userInput");
    const message = input.value;
    if (!message.trim()) return;

    const chat = document.getElementById("chat");
    chat.innerHTML += `<p class="me"> ${message}</p>`;
    input.value = "";

    try {
        const res = await fetch("http://localhost:3500/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message })
        });

        const data = await res.json();
        if(!data?.content) chat.innerHTML += `<p style="color:red;">Error al conectar con el servidor</p>`;
        const htmlResponse = marked.parse(data.content);
        chat.innerHTML += `<div class="ai">${htmlResponse}</div>`;
        chat.scrollTop = chat.scrollHeight;
    } catch (error) {
        chat.innerHTML += `<p style="color:red;">Error al conectar con el servidor</p>`;
    }
}
function pressEnter(event){
    if (event.key === "Enter") {
        sendMessage().then(r => console.log(r));
    }
}