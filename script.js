const fs = require('fs');
const path = require('path');

const directoryToTree = (rootDir, depth) => {
    // get the size of the file
    const getSize = (filePath) => fs.statSync(filePath).size;

    const buildTree = (dir, currentDepth) => {
        if(currentDepth > depth) return null; // stop if depth exceeds limit
        const stats = fs.statSync(dir); // get file stats
        const isDirectory = stats.isDirectory();

        // Build node structure for current file/direcory

        const node = {
            name: path.basename(dir),
            path:path.relative(process.cwd(),dir),
            type: isDirectory ? 'dir' : 'file',
            size: stats.size,
        };
        
        if(isDirectory){
            node.children = []; //initialize array

            const files = fs.readdirSync(dir); // read directory contents 

            for (const file of files){
                const childPath = path.join(dir,file);
                const childNode = buildTree(childPath,currentDepth+ 1);

                if(childNode){
                    node.children.push(childNode);
                }
            }
        }

        return node;
    };

    return buildTree(rootDir,0); // start building tree from rootDir

};

console.log(directoryToTree('dummy_dir',2));