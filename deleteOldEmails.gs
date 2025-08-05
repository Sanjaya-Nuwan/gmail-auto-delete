function deleteOldEmailsFromSender() {
  var sender = "sampathotp@sampath.lk"; // <-- Replace with the sender's email
  var daysOld = 1; // <-- Delete emails older than 1 day. replace days with your requiment.

  var date = new Date();
  date.setDate(date.getDate() - daysOld);
  var searchQuery = "from:" + sender + " before:" + Utilities.formatDate(date, Session.getScriptTimeZone(), "yyyy/MM/dd");

  var threads = GmailApp.search(searchQuery);
  for (var i = 0; i < threads.length; i++) {
    threads[i].moveToTrash();
  }
}
