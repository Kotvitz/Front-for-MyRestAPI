import axios from 'axios'
import * as appconst from '../AppConstant'

class AvailableFoldersService {

    retrieveAllFolders() {
        return axios.get(`${appconst.API_URL}`);
    }

    retrieveFolderContent(id) {
        return axios.get(`${appconst.API_URL}/${id}`);
    }
}

export default new AvailableFoldersService()
