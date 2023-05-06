import { Web3Storage } from "web3.storage";
import { v4 as uuidv4 } from 'uuid';

async function storeFiles(file) {
    const client = new Web3Storage({
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDM3NDM3YjgzNkEyODcxNzk4MDk0Nzc0OTQ3Qjk3OUI3ZDcyODExMzIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzIwMzUzMjM4NDMsIm5hbWUiOiJDcmVhdGlmeSJ9.z0GF4kYLu82BFHn9ChkLKONQQI9m2E-YaTs4vLhfUPU"
    })
    const ext = file.name.split('.').pop();
    const fileName = `${uuidv4()}.${ext}`;
    const newFile = new File([file], fileName, { type: file.type });
    const cid = await client.put([newFile], {
        name: fileName,
    });
    const imageURI = `https://${cid}.ipfs.dweb.link/${fileName}`;
    return imageURI;
}
export default storeFiles;