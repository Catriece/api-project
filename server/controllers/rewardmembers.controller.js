import query from "../db/utils";

const requestLogById = async (id) => {
  return await query(
    "SELECT id, url, method, timestamp FROM requestlogs WHERE id = ?",
    [id]
  );
};

const requestAllLogs = async () => {
  return await query("SELECT id, url, method, timestamp FROM requestlogs", []);
};

const findAll = async () => {
  return await query(
    "SELECT id, FirstName, LastName, EmailAddress, PhoneNumber FROM rewardmembers ORDER BY id"
  );
};

const findOne = async (id) => {
  return await query(
    "SELECT id, FirstName, LastName, EmailAddress, PhoneNumber FROM rewardmembers WHERE id = ? ORDER BY id",
    [id]
  );
};

const findOnePN = async (PhoneNumber) => {
  return await query(
    "SELECT id, FirstName, LastName, EmailAddress, PhoneNumber FROM rewardmembers WHERE PhoneNumber = ?",
    [PhoneNumber]
  );
};

const findOneLN = async (LastName) => {
  return await query(
    "SELECT id, FirstName, LastName, EmailAddress, PhoneNumber FROM rewardmembers WHERE LastName = ?",
    [LastName]
  );
};

const findOneEA = async (EmailAddress) => {
  return await query(
    "SELECT id, FirstName, LastName, EmailAddress, PhoneNumber FROM rewardmembers WHERE EmailAddress = ?",
    [EmailAddress]
  );
};

const addRewardsMember = async (newMember) => {
  return await query("INSERT INTO rewardmembers SET ?", [newMember]);
};

const updateRewardsMember = async (updateMember, SSN) => {
  return await query("UPDATE rewardmembers SET ? WHERE SSN = ?", [
    updateMember,
    SSN,
  ]);
};

const removeMember = async (SSN) => {
  return await query("DELETE FROM rewardmembers WHERE SSN = ?", [SSN]);
};

export default {
  requestAllLogs,
  requestLogById,
  findAll,
  findOne,
  findOnePN,
  findOneLN,
  findOneEA,
  addRewardsMember,
  updateRewardsMember,
  removeMember,
};
