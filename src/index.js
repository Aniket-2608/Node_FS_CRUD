const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.writeFile(fileName, fileContent);
}
myFileWriter("file.txt", "hello")

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.readFile(fileName, {encoding: "utf-8"} ).then((data)=>{
		console.log(data)
	})
}
myFileReader("file.txt", {encoding: "utf-8"});


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.appendFile(fileName, fileContent)
}
myFileUpdater("file.txt", " world")

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.unlink(fileName)
}
myFileDeleter("file.txt")


module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }