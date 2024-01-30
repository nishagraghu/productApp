import FetchAll from '../FetchAll';

describe('FetchAll', () => {
  beforeEach(() => {
    global.fetch = jest.fn(); // Mock the fetch function
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should fetch data successfully', async () => {
    const data = [
      { id: 1, category_name: 'Category 1' },
      { id: 2, category_name: 'Category 2' },
    ];

    fetch.mockImplementationOnce(() => Promise.resolve({ json: () => Promise.resolve(data) }));

    await expect(FetchAll('https://fakestoreapi.com/categories')).resolves.toEqual(data);
  });
  
});
