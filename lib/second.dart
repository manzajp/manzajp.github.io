import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
// ignore: avoid_web_libraries_in_flutter
import 'dart:js' as js;

import 'package:outcast_web/provider/page.dart';
import 'package:outcast_web/widgets.dart';
import 'package:provider/provider.dart';

class SecondPage extends StatefulWidget {
  const SecondPage({Key? key}) : super(key: key);

  @override
  State<SecondPage> createState() => _SecondPageState();
}

class _SecondPageState extends State<SecondPage> {
  List<String> buttonDialogTitles = [
    'Google',
    'Back',
  ];

  @override
  Widget build(BuildContext context) {
    // final navigator = Navigator.of(context);
    final pageProvider = context.read<PageModel>();

    Widget expandedButton({required String text, void Function()? onPressed}) => Expanded(
          child: Card(
            elevation: 3,
            child: MaterialButton(
              onPressed: onPressed,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    text,
                    style: GoogleFonts.robotoCondensed(),
                  ),
                ],
              ),
            ),
          ),
        );

    Widget body = Center(
      child: Card(
        color: Colors.purple[100],
        elevation: 10,
        child: Padding(
          padding: const EdgeInsets.all(5.0),
          child: Card(
            margin: EdgeInsets.zero,
            child: SizedBox(
              height: 300,
              width: 300,
              child: Padding(
                padding: const EdgeInsets.all(5.0),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    expandedButton(
                        text: buttonDialogTitles.first,
                        onPressed: () {
                          snackbar(context, text: 'Goodbye!');
                          js.context.callMethod('open', ['https://www.google.com', '_self']);
                        }),
                    expandedButton(
                        text: buttonDialogTitles.last,
                        onPressed: () {
                          // navigator.pop();
                          snackbar(context, text: 'Hello, welcome!');
                          pageProvider.setPageNo = 0;
                          print(pageProvider.getPageNo);
                        })
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );

    print('SecondPage');
    return body;
  }
}
