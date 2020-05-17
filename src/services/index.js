import axios from 'axios'

function paginate (arr, size) {
    return arr.reduce((acc, val, i) => {
        let idx = Math.floor(i / size)
        let page = acc[idx] || (acc[idx] = [])
        page.push(val)

        return acc
    }, [])
}

export const getListOfPosts = () => (
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
        return paginate(res.data, 20);
    }).catch(res => {
        return res.error
    })
)

export const getPostDetails = postNumber => (
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postNumber}`).then(res => {
        return res.data
    }).catch(res => {
        return res.error
    })
)

export const getCommentsDetails = postNumber => (
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postNumber}/comments`).then(res => {
        return res.data
    }).catch(res => {
        return res.error
    })
)