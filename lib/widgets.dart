import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

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

void snackbar(BuildContext context, {String text = ''}) {
  ScaffoldMessenger.of(context).hideCurrentSnackBar();
  ScaffoldMessenger.of(context).showSnackBar(
    SnackBar(
      behavior: SnackBarBehavior.floating,
      duration: const Duration(seconds: 3),
      content: Text(text),
    ),
  );
}
