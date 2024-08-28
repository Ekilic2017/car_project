import { CarType } from "../types";
import { colors } from "./constants";

const url2="https://cdn.imagin.studio/getimage?customer=hrjavascript-mastery&make=bmw&modelFamily=m4&zoomType=fullscreen&angle=11&paintId=pspc0124";
const generateImage = (car: CarType, angle?: string): string => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    url.searchParams.append("customer", "hrjavascript-mastery");
    url.searchParams.append("make", car.make);
    url.searchParams.append("modelFamily", car.model as string);
    url.searchParams.append("zoomType", "fullscreen");
     // açı parametresi geliyorsa url'e ekle
  if (angle) {
    url.searchParams.append("angle", angle);
  }
    // colors dizisinin uzunluğuna göre rastgele sayı hesaplama
    const i = Math.round(Math.random() * colors.length);

    // rastgele seçilen rengi url'e ekleme
    url.searchParams.append("paintId", colors[i]);
  
    return url.href;
}
export default generateImage;