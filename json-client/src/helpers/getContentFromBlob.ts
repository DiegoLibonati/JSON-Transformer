export const getContentFromBlob = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    try {
      const reader = new FileReader();

      reader.onload = function (event) {
        resolve(event.target.result as string);
      };

      reader.readAsText(blob);
    } catch (e) {
      reject(e);
    }
  });
};
