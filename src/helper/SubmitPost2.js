import axios from 'axios';
import Axios from 'axios';
import { RENTAL_API_URL, ACCESS_TOKEN } from '@env';
export const submitPost2 = (data) => {
    const url = `${RENTAL_API_URL}/api/Service`;
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIzIiwibmFtZSI6ImY2NFNob3AiLCJyb2xlIjoiVXNlciIsIm5iZiI6MTY1NDQyNTk4OCwiZXhwIjoxNjU0NDI2NTg4LCJpYXQiOjE2NTQ0MjU5ODh9.tnTdf_iD-p7U1VcbaqvXrOXlRRLQ7L_pHsR71ga9b1A'
    // console.log(data)
    // console.log(`${url}/CreateService`)
    // console.log(token)
    // Axios.get(`${url}/GetServiceByIdentificationString?IdentificationString=BNkfVRaaRi9U6RQ`).then(res => console.log(res.data));

    const { title, images, description, price, currency, payedPer, phoneNumber } =
    data;
    const bodyFormData = new FormData();
    bodyFormData.append('pictures', JSON.stringify(images));
    bodyFormData.append('Title', "Titlu");
    bodyFormData.append('Description', "Descriere");
    bodyFormData.append('PhoneNumber', "07321");
    bodyFormData.append('Price', 0);
    bodyFormData.append('ServType', 'zi');
    console.log(bodyFormData)

    axios({
        method: "post",
        url: `${url}/CreateService`,
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data", 'Authorization': `Bearer ${token}` },
      })
        .then(function (response) {
          //handle success
          console.log(response);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
}