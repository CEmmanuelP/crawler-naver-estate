const axios = require("axios");
const cheerio = require("cheerio");
const iconv = require("iconv");
const log = console.log;

// 시•도 정보 가져오기
const getSidoInfo = async () => {
  try {
    const res = await axios.get(
      "https://new.land.naver.com/api/regions/list?cortarNo=0000000000",
      {
        data: {
          sameAddressGroup: "false",
        },
        headers: {
          "Accept-Encoding": "gzip",
          Host: "new.land.naver.com",
          Referer:
            "https://new.land.naver.com/complexes?ms=37.2123538,127.0550392,15&a=APT&e=RETAIL",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-origin",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36",
        },
      }
    );
    if (res.status === 200) {
      //   log(res.data.regionList);
      const sidoArray = [];

      if (res.data.regionList) {
        res.data.regionList.map((sido) => sidoArray.push(sido));
        log(sidoArray);
      }

      return sidoArray;
    }
  } catch (error) {
    console.error(error);
  }
};

// 군•구 정보 가져오기
const getGunguInfo = async (sido_code) => {
  try {
    const res = await axios.get(
      `https://new.land.naver.com/api/regions/list?cortarNo=${sido_code}`,
      {
        data: {
          sameAddressGroup: "false",
        },
        headers: {
          "Accept-Encoding": "gzip",
          Host: "new.land.naver.com",
          Referer:
            "https://new.land.naver.com/complexes?ms=37.2123538,127.0550392,15&a=APT&e=RETAIL",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-origin",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36",
        },
      }
    );

    // console.log(res);

    if (res.status === 200) {
      //   log(res.data.regionList);
      const gunguArray = [];

      if (res.data.regionList) {
        res.data.regionList.map((gungu) => gunguArray.push(gungu));
        log(gunguArray);
      }

      return gunguArray;
    }
  } catch (error) {
    console.error(error);
  }
};

// 동 정보 가져오기
const getDongInfo = async (gungu_code) => {
  try {
    const res = await axios.get(
      `https://new.land.naver.com/api/regions/list?cortarNo=${gungu_code}`,
      {
        data: {
          sameAddressGroup: "false",
        },
        headers: {
          "Accept-Encoding": "gzip",
          Host: "new.land.naver.com",
          Referer:
            "https://new.land.naver.com/complexes?ms=37.2123538,127.0550392,15&a=APT&e=RETAIL",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-origin",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36",
        },
      }
    );

    // console.log(res);

    if (res.status === 200) {
      //   log(res.data.regionList);
      const dongArray = [];

      if (res.data.regionList) {
        res.data.regionList.map((dong) => dongArray.push(dong));
        log(dongArray);
      }

      return dongArray;
    }
  } catch (error) {
    console.error(error);
  }
};

// 아파트 정보 가져오기
const getAptInfo = async (dong_code) => {
  try {
    const res = await axios.get(
      `https://new.land.naver.com/api/regions/list?cortarNo=${dong_code}&realEstateType=APT&order=`,
      {
        data: {
          sameAddressGroup: "false",
        },
        headers: {
          "Accept-Encoding": "gzip",
          Host: "new.land.naver.com",
          Referer:
            "https://new.land.naver.com/complexes?ms=37.2123538,127.0550392,15&a=APT&e=RETAIL",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-origin",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36",
        },
      }
    );

    // console.log(res);

    if (res.status === 200) {
      log(res.data.regionList);
      const aptArray = [];

      if (res.data.complexList) {
        res.data.complexList.map((apt) => aptArray.push(apt));
        log(aptArray);
      }

      return aptArray;
    }
  } catch (error) {
    console.error(error);
  }
};

const getEstate = async () => {
  try {
    const res = await axios.get(
      "https://new.land.naver.com/api/complexes/overview/25796?complexNo=25796",
      {
        headers: {
          "Accept-Encoding": "gzip",
          Host: "new.land.naver.com",
          Referer:
            "https://new.land.naver.com/complexes/26216?ms=37.2123538,127.057734,15&a=APT&e=RETAIL",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-origin",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36",
        },
      }
    );

    // console.log(res);

    if (res.status === 200) {
      log(res.data);
    }
  } catch (error) {
    console.error(error);
  }
};

// getEstate();
// getSidoInfo();

let sidoArrayList = getSidoInfo();

let gunguArrayList = getGunguInfo(sidoArrayList[0]);

console.log(sidoArrayList);
console.log(gunguArrayList);
