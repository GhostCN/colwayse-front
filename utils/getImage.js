

export function getImage(media) {
  if (media?.data) {
    const path = process.env.NEXT_PUBLIC_IMG_SERVER;

    const { url } = Array.isArray(media.data)
      ? media.data[0].attributes
      : media.data
        ? media.data.attributes
        : '';
    const urlImage = path && url.startsWith('/') ? `${path}${url}` : url;

    return urlImage;
  }

  return '#';
}
