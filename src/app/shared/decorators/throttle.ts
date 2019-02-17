export function throttle(ms = 400) {

  // This decorator prevent to make several requests to backend
  return (target: any, property: string, descriptor: PropertyDescriptor) => {

    const method = descriptor.value;
    let timer: any = 0;
    descriptor.value = (...args: any[]) => {
      if (event) { event.preventDefault(); }
      clearInterval(timer);
      timer = setTimeout(() => method.apply(this, args), ms);
    };

    return descriptor;
  };
}
