function submitAction(url) {
  $('form').attr('action', group_messages_path(group));
  $('form').submit();
}