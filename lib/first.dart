import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:outcast_web/provider/page.dart';
import 'package:outcast_web/second.dart';
import 'package:provider/provider.dart';

class FirstPage extends StatefulWidget {
  const FirstPage({Key? key}) : super(key: key);

  @override
  State<FirstPage> createState() => _FirstPageState();
}

class _FirstPageState extends State<FirstPage> {
  List<String> buttonTitles = [
    'Show a Dialog!',
    'Nothing happens..',
    'A New Page',
  ];

  List<String> buttonDialogTitles = [
    'Back',
  ];

  @override
  Widget build(BuildContext context) {
    final navigator = Navigator.of(context);
    final pageProvider = context.read<PageModel>();

    void onPressedNull() {}
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

    List<Widget> bodyWidget = buttonTitles
        .map((e) => (e == buttonTitles.first)
            ? expandedButton(
                text: e,
                onPressed: () {
                  showDialog(
                      barrierDismissible: false,
                      context: context,
                      builder: (context) => Center(
                            child: Card(
                              margin: EdgeInsets.zero,
                              child: SizedBox(
                                height: 300,
                                width: 300,
                                child: Column(
                                  mainAxisAlignment: MainAxisAlignment.center,
                                  crossAxisAlignment: CrossAxisAlignment.stretch,
                                  children: [
                                    expandedButton(
                                        text: buttonDialogTitles[0],
                                        onPressed: () {
                                          navigator.pop();
                                        })
                                  ],
                                ),
                              ),
                            ),
                          ));
                },
              )
            : (e == buttonTitles.last)
                ? expandedButton(
                    text: e,
                    onPressed: () {
                      // navigator.push(
                      // MaterialPageRoute(
                      //   builder: (context) => const SecondPage(),
                      // ),
                      // );
                      pageProvider.setPageNo = pageProvider.pages.length - 1;
                      print(pageProvider.getPageNo);
                    },
                  )
                : expandedButton(
                    text: e,
                    onPressed: onPressedNull,
                  ))
        .toList();

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
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: bodyWidget,
                ),
              ),
            ),
          ),
        ),
      ),
    );

    print('MainPage');
    return body;
  }
}
