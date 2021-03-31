import { toast } from "react-toastify";

const apiPost = (objectPost) => {

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            
            body: JSON.stringify({
                title: objectPost.title,
                body: objectPost.body,
                userId: objectPost.userId,
            }),

            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => {
            if(!response.ok){
                throw Error(response.statusText);
            }
            toast.success("Seu post foi enviado! :)")
        })
        .catch(error => {toast.error("Ops! Ocorreu algum erro ao tentar enviar seu post :("); console.log("ERROR APIPOST: ", error)})

}

export default apiPost;