import 'package:flutter/material.dart';
import 'package:outcast_web/first.dart';
import 'package:outcast_web/second.dart';

class PageModel extends ChangeNotifier {
  List<Widget> pages = const [
    FirstPage(),
    SecondPage(),
  ];

  int pageNo = 0;

  int get getPageNo => pageNo;
  set setPageNo(int pageNo) {
    this.pageNo = pageNo;
    notifyListeners();
  }
}
