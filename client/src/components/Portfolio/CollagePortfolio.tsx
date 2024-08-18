import React, { useState } from "react";
import "../../styles/Portfolio/CollagePortfolio.css";
import Modal from "./Modal";

const CollagePortfolio: React.FC = () => {
  const images: string[] = [
    "https://downloader.disk.yandex.ru/preview/b7b230700b2d58e0b411015c5bf510deaeb1c1c1e629ea07464d77a5fed54ddc/66c0d8f8/emSg3_2wSSlFXwDmpmVv4hA_HiaeO-twHu4lXOxTm4QYRgjc6WsuUbITCMrYjE_erMYMXsB2J9rN5pGhNrHiBQ%3D%3D?uid=0&filename=SNK01004.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1474x950",
    "https://downloader.disk.yandex.ru/preview/d5b9e19193335f780971cda38671f69df037c37a03250209a452a1de03619534/66c0d8f8/L7nqhavieftm6sM_HTyxg615t7rPgjuQkXXidnwhoW9YU3DEZDNmnBfQEcTIBfj8-N0Ao4-5YtPpI1YqcI7p7w%3D%3D?uid=0&filename=SNK01008.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1474x950",
    "https://downloader.disk.yandex.ru/preview/ad2cd6417c6a4fa9b7367c57ecc708dbf63b9b6dfc027899b62dcb05c4e1aad6/66c0d8f8/eatCyn3YfBU5hAg6xYlNcpUv4yGyJgRISobKGlEL6LmJyOz3HcVfz3oPQGHmmCdRIa_20z_bU4XsvTBFia7J1A%3D%3D?uid=0&filename=SNK01010.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1474x950",
    "https://downloader.disk.yandex.ru/preview/7c04e6cc341f723cee733fcf263f445f2a448da276593e5ba75879c8aa9c8375/66c0d8f8/sRKE4oEbEVZCWDwtuV1cdH0Ha_gS80h-O16LKOzRlUsTgSpTpWq8q-Tdus56HUHHh-fwFbgGARSOY0eXF54Zuw%3D%3D?uid=0&filename=SNK01014.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1474x950",
    "https://downloader.disk.yandex.ru/preview/050500913fdfc0c5c27cf841ab69a5fbe7e4bd255097a6dd517ffcf0d85417b6/66c0d8f8/7VwtISlzWMiSYfKR29hG6eYspbUumNXNM8qcVU5sQghEMZ4zxrjO1sGCMYuwOGTmt9QXwksMnTzLkTCHMlHTUg%3D%3D?uid=0&filename=SNK01018.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1474x950",
    "https://downloader.disk.yandex.ru/preview/2aafd2e2d6fae2928c0bd25ea54949ad3d21732a61268066335244cef8a3af76/66c0d8f8/HlnUSckG2n_UPColvw_7x4e1e8CjAU8zykdf4IVtOqXiUqUR3PlIb_pw-spbjpgPpMv9f6FKMjXsf9j-d_VtyA%3D%3D?uid=0&filename=10%D1%8515.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1474x950",
    "https://downloader.disk.yandex.ru/preview/6e7511443116949e1fe39e1ea8a13e699707558082816f640b11611966fdb6df/66c0d8f8/e3S73SmhovsIqExuSLhzYSlCl19D9ntF9N8fi-ooW0Lr3YyajBAQmjXfNgVsYtXes316YrK3KHJtqMg9kI8PFg%3D%3D?uid=0&filename=15%D1%8521.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1474x950",
    "https://downloader.disk.yandex.ru/preview/a1610bfb8ca5818e39f4065f2a9342af8d0e0c053a9c9f75ad647aebb9f6e949/66c0d8f8/SuQ7yDB2ABM8whUMg-P_MpX0MPbjv0CDaJ7dc_34Ug2koBV6MPQVgdbSa-vlqauFh3m_xZMIn5e3n7fJhuHAHg%3D%3D?uid=0&filename=20%D1%8530.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1474x950",
    "https://downloader.disk.yandex.ru/preview/2acee38cfd5b9031ee330e1b4bcda3c9283e15628718b65a20fc52ba11575930/66c0d8f8/vksmCFVjKD5D7imtnN82TnePw6hmmvLDdnnLVSKYH42eP_8aMR9L7Stz3UPV1SdRqLPs7Xh9tq_ry6UOq_NfDQ%3D%3D?uid=0&filename=SNK00789.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1474x950",
    "https://downloader.disk.yandex.ru/preview/9aa3d78e5baa6021cfb7231f94c05a5f0137aa0964b3d00b2b500db8baef462a/66c0d8f8/8DCFYXH9VrIyYyDkq2TGo7sJYRadIMU2h1j7jQly1O9eswZyUGH1KPemBSAuHBEVx_XKmu_DKnf4ncHFBMie5A%3D%3D?uid=0&filename=SNK00798.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1474x950",
    "https://downloader.disk.yandex.ru/preview/f303f29641afb265abf60b6e92c61736798724affe516690581e0c8407fa34ed/66c0d8f8/RSV0_gwiWvKgjo8PMTYs0UYL7zFX75F90c29A6YcPB2VsNqIsQkpP--idS9n3hN5ZlpnKOR-l-WWPMLrAFqZXQ%3D%3D?uid=0&filename=SNK00809.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1474x950",
    "https://downloader.disk.yandex.ru/preview/8952717bf21292aaad8c953ee74cea724ad4b54e56c6da19108aabe8149dd97e/66c0d8f8/_TvanHysgAQNdtyyPe_FRTdFtlRhQYyLHwuUjfpDCjXSzchGS9OLSw2-gSPbZL6snvMmHBBqp3rTqQwm83fYiQ%3D%3D?uid=0&filename=SNK00886.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1474x950",
    "https://downloader.disk.yandex.ru/preview/0aab0cd1b5a2c766e3bf1dd689e191d1fd49f6367f5f4ab3a955e6eab04ca880/66c0d8f8/q4tF9qL4jasrDr9GpYO62-O0UsoSKS64_0A8Q2LIdJt5qVtOqHsXDYNTQUXfQw9dUX_8C5pNlxS82DO4Il8lPQ%3D%3D?uid=0&filename=SNK01002.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1474x950",
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (src: string) => {
    document.body.classList.add("no-scroll");
    setSelectedImage(src);
  };

  const closeModal = () => {
    document.body.classList.remove("no-scroll");
    setSelectedImage(null);
  };

  return (
    <div className="wrapper_collage">
      <div className="collage">
        {images.map((src, index) => (
          <div
            key={index}
            className={`item ${index % 3 === 2 ? "wide" : ""} ${
              index % 4 === 1 ? "tall" : ""
            }`}
            onClick={() => openModal(src)}
          >
            <img src={src} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      {selectedImage && <Modal src={selectedImage} closeModal={closeModal} />}
    </div>
  );
};

export default CollagePortfolio;
