import app from './App'

function main() {
    app.listen(3000, 'localhost', () => {
        console.log('Server running at port 3000')
    })
}

main()