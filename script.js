const byteSize = (str) => {
  // write your code here
	const blob = new Blob([str]);

  // Return the size of the Blob object in bytes
  return blob.size;
};

// Do not change the code below
// const str = prompt("Enter some string.");
// alert(byteSize(str));
