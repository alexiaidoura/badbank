   

  export const validate = (field, label) => {
    const [status, setStatus] = React.useState('');
    console.log('validating');
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    status={status};

    return true;
  };
