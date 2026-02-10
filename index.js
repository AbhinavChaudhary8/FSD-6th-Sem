import fs from "fs/promises";
const filestatus = async(path)=>{
    const stats = await fs.stat(path);
    console.log(stats);
}
