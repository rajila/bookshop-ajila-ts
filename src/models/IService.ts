interface IService <T> {
      getAll(): Promise<Array<T>>;
}

export default IService;