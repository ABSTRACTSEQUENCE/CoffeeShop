export const ErrorHandler = {
  dbOpenError(err) {
    if (err) console.error(`Unable to open connection: ${err.message}`);
    else console.log("Connection open");
  },
  dbCloseError(err) {
    if (err) console.error(`Unable to close connection: $ {err.message}`);
    else console.log("Connection closed successfully");
  },
  invalidQueryError(err) {
    if (err) console.error(`Invalid query: ${err.message}`);
    else console.log("Query executed successfully");
  },
};
