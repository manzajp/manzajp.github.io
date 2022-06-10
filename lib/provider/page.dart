import 'package:flutter/material.dart';
import 'package:outcast_web/first.dart';
import 'package:outcast_web/second.dart';
import 'package:outcast_web/test.dart';

class PageModel extends ChangeNotifier {
  List<Widget> pages = [
    const FirstPage(),
    StatefulDragArea(
      child: Container(height: 100, width: 100, color: Colors.yellow),
    ),
    const SecondPage(),
  ];

  int secretPage = 0;

  int pageNo = 0;

  int get getPageNo => pageNo;
  set setPageNo(int pageNo) {
    this.pageNo = pageNo;
    notifyListeners();
  }

  int get getSecretPage => secretPage;
  set setSecretPage(int secretPage) {
    this.secretPage = secretPage;
    notifyListeners();
  }
}
