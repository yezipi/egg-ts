
export default {
  success(data: any, msg: any = 'success') {
    const { response }: any = this;
    response.body = {
      code: 1,
      data,
      msg,
    };
  },
};
