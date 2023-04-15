interface spy {
  name: {
    first: string;
    last: string;
    title: string;
  };
  picture: {
    large: string;
  };
  id: {
    name: string;
  };
  location: {
    postcode: string;
    city: string;
    street: {
      number: number;
      name: string;
    };
    timezone: {
      offset: "";
      description: "";
    };
    country: string;
    state: string;
  };
  phone: string;
  cell: string;
  email: string;
  gender: string;
}
