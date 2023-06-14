import query from "../db/utils";

const findAll = async () => {
  return await query(
    "SELECT id, FirstName, LastName, EmailAddress, PhoneNumber"
  );
};

const findOnePN = async (PhoneNumber) => {
  return (
    await query(
      "SELECT id, FirstName, LastName, EmailAddress, PhoneNumber WHERE PhoneNumber = ?"
    ),
    [PhoneNumber]
  );
};

const findOneLN = async (LastName) => {
  return (
    await query(
      "SELECT id, FirstName, LastName, EmailAddress, PhoneNumber WHERE LastName = ?"
    ),
    [LastName]
  );
};

const findOneEA = async (EmailAddress) => {
  return (
    await query(
      "SELECT id, FirstName, LastName, EmailAddress, PhoneNumber WHERE EmailAddress = ?"
    ),
    [EmailAddress]
  );
};

const addRewardsMember = async (newMember) => {
  return await query("INSERT INTO rewardmembers", [newMember]);
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
  findAll,
  findOnePN,
  findOneLN,
  findOneEA,
  addRewardsMember,
  updateRewardsMember,
  removeMember,
};
