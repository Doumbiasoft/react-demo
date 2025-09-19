export interface IEmployee {
  id: number;
  name: string;
  title: string;
  profile: string;
  officePhone: string;
  mobilePhone: string;
  email: string;
}

export const employeesData: IEmployee[] = [
  {
    id: 1,
    name: "James King",
    title: "President and CEO",
    profile: "https://xsgames.co/randomusers/avatar.php?g=male&1",
    officePhone: "781-000-0001",
    mobilePhone: "617-000-0001",
    email: "james-king@company.com",
  },
  {
    id: 2,
    name: "Julie Taylor",
    title: "VP of Marketing",
    profile: "https://xsgames.co/randomusers/avatar.php?g=female&2",
    officePhone: "781-000-0002",
    mobilePhone: "617-000-0002",
    email: "julie-taylor@company.com",
  },
  {
    id: 3,
    name: "Eugene Lee",
    title: "CFO",
    profile: "https://xsgames.co/randomusers/avatar.php?g=male&2",
    officePhone: "781-000-0003",
    mobilePhone: "617-000-0003",
    email: "eugene-lee@company.com",
  },
  {
    id: 4,
    name: "John Williams",
    title: "VP Engineering",
    profile: "https://xsgames.co/randomusers/avatar.php?g=male&3",
    officePhone: "781-000-0004",
    mobilePhone: "617-000-0004",
    email: "john-williams@company.com",
  },
  {
    id: 5,
    name: "Ray Moore",
    title: "VP of Sale",
    profile: "https://xsgames.co/randomusers/avatar.php?g=male&4",
    officePhone: "781-000-0005",
    mobilePhone: "617-000-0005",
    email: "ray-moore@company.com",
  },
  {
    id: 6,
    name: "Paul Jones",
    title: "QA Manager",
    profile: "https://xsgames.co/randomusers/avatar.php?g=male&5",
    officePhone: "781-000-0006",
    mobilePhone: "617-000-0006",
    email: "paul-jones@company.com",
  },
];
