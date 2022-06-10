import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:outcast_web/provider/page.dart';
import 'package:outcast_web/widgets.dart';
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

    List<Widget> bodyWidget = buttonTitles
        .map((e) => (e == buttonTitles.first)
            ? expandedButton(
                text: e,
                onPressed: () {
                  showDialog(
                      barrierDismissible: false,
                      context: context,
                      builder: (context) {
                        WidgetsBinding.instance.addPostFrameCallback((_) => snackbar(context, text: 'A dialog appears!'));
                        return Scaffold(
                          backgroundColor: Colors.transparent,
                          body: Center(
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
                          ),
                        );
                      });
                },
              )
            : (e == buttonTitles[1])
                ? expandedButton(
                    text: e,
                    onPressed: () {
                      // navigator.push(
                      // MaterialPageRoute(
                      //   builder: (context) => const SecondPage(),
                      // ),
                      // );
                      // pageProvider.setPageNo = 1;
                      switch (pageProvider.getSecretPage) {
                        case 0:
                          snackbar(context, text: 'Were you expecting something?');
                          break;
                        case 1:
                          snackbar(context, text: 'Wow, you really think there\'s something here?');
                          break;
                        case 2:
                          snackbar(context, text: 'Slow down, there\'s nothing alright!');
                          break;
                        case 3:
                          snackbar(context, text: 'You ain\'t gonna find anything, trust me!');
                          break;
                        case 4:
                          snackbar(context, text: 'You are playing such a stupid games, there\'s really nothing here, move on!');
                          break;
                        default:
                      }
                      (pageProvider.getSecretPage < 5) ? pageProvider.setSecretPage = pageProvider.getSecretPage + 1 : pageProvider.setPageNo = 1;
                      print(pageProvider.getPageNo);
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
                          snackbar(context, text: 'Onto a new page!');
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
