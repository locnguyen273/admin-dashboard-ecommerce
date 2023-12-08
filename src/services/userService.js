import { BaseApi } from "./baseService";

const AdminLoginService = (user) => {
  return BaseApi.post(`user/admin-login`, user);
};

const AdminCreateNewUserService = () => {
  return BaseApi.post(`user/register`);
};

const GetAllUserService = () => {
  return BaseApi.get(`user/all-users`);
};

const GetUserByIdService = (userId) => {
  return BaseApi.get(`user/${userId}`)
}

export const UserService = {
  AdminLoginService,
  AdminCreateNewUserService,
  GetAllUserService,
  GetUserByIdService,
};
