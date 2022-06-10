import 'package:flutter/material.dart';
import 'package:outcast_web/first.dart';
import 'package:outcast_web/provider/page.dart';
import 'package:outcast_web/second.dart';
import 'package:outcast_web/test.dart';
import 'package:provider/provider.dart';

void main() {
  // runApp(ChangeNotifier(child: const MyApp()));
  runApp(
    ChangeNotifierProvider(
      create: (context) => PageModel(),
      child: const MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'MANZA',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      // home: const MainPage(),
      routes: <String, WidgetBuilder>{
        '/': (BuildContext context) => const MainPage(),
        '/newPage': (BuildContext context) => const SecondPage(),
      },
    );
  }
}

class MainPage extends StatefulWidget {
  const MainPage({Key? key}) : super(key: key);

  @override
  State<MainPage> createState() => _MainPageState();
}

class _MainPageState extends State<MainPage> {
  @override
  Widget build(BuildContext context) {
    final pageProvider = context.read<PageModel>();
    // Widget body = pageProvider.pages.elementAt(pageProvider.getPageNo);
    // Widget body = StatefulDragArea(child: pages.elementAt(index));

    return Scaffold(
      body: Consumer<PageModel>(
        builder: ((context, value, child) => pageProvider.pages.elementAt(pageProvider.getPageNo)),
      ),
    );
  }
}
